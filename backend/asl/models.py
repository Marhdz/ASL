from django.db import models

# Create your models here.

class Word(models.Model):
    name = models.CharField(max_length=50)
    name2 = models.CharField(max_length=50, blank=True)
    nameE = models.CharField(max_length=50, blank=True)
    imageURL = models.URLField()

    def _str_(self):
        return self.title
