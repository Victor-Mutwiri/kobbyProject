from django.shortcuts import render, redirect
from django.http import HttpResponseBadRequest, HttpResponse, JsonResponse
from .forms import ProjectForm, IssueForm
import json
from django.views.decorators.csrf import csrf_exempt
from .models import Project, Issue, Comment
from datetime import datetime
import redis

redis_cli = redis.Redis()
pubsub = redis_cli.pubsub()


def issue_comments(request, *args, **kwargs):
  _comment = []
  comments = Comment.objects.filter(issueid=kwargs['id'])
  for cmt in comments:
    _cmt = cmt.__dict__
    _cmt.pop('_state')
    _cmt['date'] = datetime.isoformat(_cmt['data'])
    _comment.append(_cmt)
  data = [{'user':'kiptoo','date':'2025/01/01', 'content':'commenttext'},]
  return HttpResponse(json.dumps(data))

def project_info(request, *args, **kwargs):
  print(request.GET)
  issues = Issue.objects.all()
  console.log(json.dumps([{"ok":"project info"}, {"ok":"cmt"}]))
  return HttpResponse(json.dumps([{"ok":"project info"}, {"ok":"cmt"}]))

def get_issue_info(request, *args, **kwargs):
  issue = Issue.objects.filter(**kwargs)[0].__dict__
  issue.pop('_state')
  issue['cdueDate'] = datetime.isoformat(issue['cdueDate'])
  return HttpResponse(json.dumps(issue))

@csrf_exempt
def issues(request):
  if request.method == 'POST':
    data = json.loads(request.body)
    data['cproject'] = Project.objects.filter(projectID='PRJ-001')[0]
    if data['cassignee'] == '':
       data['cassignee'] = None
    else:
       data['cassignee'] = User.objects.filter(username=data['cassignee'])
    data['cdueDate'] =   datetime.fromisoformat(data['cdueDate'])
    issue = IssueForm(data)
    if issue.is_valid():
      issue = Issue.objects.create(**data)
      _issue = issue.__dict__
      _issue.pop('_state')
      _issue['cdueDate'] = datetime.isoformat(_issue['cdueDate'])
    return HttpResponse(json.dumps(_issue), status=201)

  if request.method == 'GET':
    print(request.GET)
    _issue_id = request.GET.get('issueid')
    _issue = Issue.objects.get(id=int(_issue_id))
    print(_issue)
    _issue_data = _issue.__dict__
    _issue_data.pop('_state')
    _issue_data['cdueDate'] = datetime.isoformat(_issue_data['cdueDate'])
    print(_issue_data)
    return HttpResponse(json.dumps(_issue_data))

@csrf_exempt
def projects(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        data['project_url'] = None
        project = ProjectForm(data)
      
        if project.is_valid():
            if data['projectLeader'] == '':
                data['projectLeader'] = request.user
            else:
                user = User.objects.filter(username=data.projectLeader)
                data['projectLeader'] = user
            project = Project.objects.create(**data)
            channel = "PRJ-" + str(project.id)
            return HttpResponse(project.id, status=201)
        print(project.errors)
        return HttpResponseBadRequest('invalid form')
    if request.method == 'GET':
       print(request.GET)
       print(request.GET.get('projectd'))
       _pid = request.GET.get('projectid')
       if _pid:
           _project = Project.objects.get(id=int(_pid))
           response = _project.__dict__
           response.pop('_state')
           response['startDate'] = datetime.isoformat(response['startDate'])
           print(response)
           return HttpResponse(json.dumps(response))
       projects = Project.objects.all()
       _projects = []
       for project in projects:
         __project = {}
         __project = dict(project.__dict__)
         __project.pop('_state')
         __project['startDate'] = datetime.isoformat(project.startDate)
         _projects.append(__project)
       return HttpResponse(json.dumps(_projects))
