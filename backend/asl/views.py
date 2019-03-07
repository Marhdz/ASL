from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import AslSerializer      # add this
from .models import Word                     # add this

class WordView(viewsets.ModelViewSet):       # add this
  serializer_class = AslSerializer          # add this
  queryset = Word.objects.all()              # add this
# Create your views here.
