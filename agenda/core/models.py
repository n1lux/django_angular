from django.db import models


# Create your models here.


class Person(models.Model):
    name = models.CharField(max_length=20)
    age = models.IntegerField()
    phone = models.CharField(max_length=8)
    email = models.CharField(max_length=15)

    @classmethod
    def create(cls, **kwargs):
        return cls(kwargs)

    def __str__(self):
        return self.name
