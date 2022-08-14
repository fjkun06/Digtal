from django.db import models
from django.db import models
import smtplib
from email.message import EmailMessage

# creation of the contact form models




class Contact(models.Model):

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=255)
    subject = models.CharField(
        max_length=255, blank=True, default='Reporting Bugs')
    message = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.last_name


class Newsletter(models.Model):

    email = models.EmailField()

    def __str__(self):
        return self.email
