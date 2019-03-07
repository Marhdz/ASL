from rest_framework import serializers
from .models import Word

class AslSerializer(serializers.ModelSerializer):
  class Meta:
    model = Word
    fields = ('id','name', 'name2', 'nameE', 'imageURL')
