from django.db import models


class User(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    login = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=30)
    email = models.EmailField(max_length=50, null=True, blank=True, unique=True)
    birthday = models.DateField()
    date_registration = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.login
