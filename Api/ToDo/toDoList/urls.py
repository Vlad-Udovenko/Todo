from django.conf.urls import url
from toDoList import views

urlpatterns =[
    url(r'^list/$', views.listApi),
    url(r'^list/([0-9]+)$', views.listApi)
]
