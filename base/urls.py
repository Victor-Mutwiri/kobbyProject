from django.urls import path
from .views import projects, project_info
from .views import issues, get_issue_info, issue_comments

urlpatterns = [
  path('issues/', issues, name='issues'),
  path('issues/<str:id>/', get_issue_info, name='issue_info'),
  path('projects/', projects, name='projects'),
  path('projects/<str:id>/', project_info, name='project-info'),
  path('<int:id>/comments/', issue_comments, name='comments'),
]
