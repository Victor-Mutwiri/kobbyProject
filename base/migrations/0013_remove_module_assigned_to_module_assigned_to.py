# Generated by Django 4.1.7 on 2024-12-31 17:01

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0012_alter_issue_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='module',
            name='assigned_to',
        ),
        migrations.AddField(
            model_name='module',
            name='assigned_to',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]
