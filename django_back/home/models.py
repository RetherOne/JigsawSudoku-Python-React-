from django.db import models

class Account(models.Model):
    name = models.CharField(max_length=80)
    password = models.IntegerField()
