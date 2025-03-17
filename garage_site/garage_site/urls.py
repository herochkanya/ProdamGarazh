# garage_site/urls.py

from django.urls import path
from garage import views


urlpatterns = [
    path('', views.index, name='index'),
    # інші URL-шляхи
]
