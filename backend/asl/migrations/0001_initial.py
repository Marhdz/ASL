# Generated by Django 2.1.7 on 2019-03-06 05:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Word',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('name2', models.CharField(max_length=50)),
                ('nameE', models.CharField(max_length=50)),
                ('imageURL', models.URLField()),
            ],
        ),
    ]