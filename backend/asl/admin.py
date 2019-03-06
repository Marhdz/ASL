from django.contrib import admin
from .models import Word

class AslAdmin(admin.ModelAdmin):
    list_display = ('name', 'name2', 'nameE', 'imageURL')

# Register your models here.
admin.site.register(Word, AslAdmin)
