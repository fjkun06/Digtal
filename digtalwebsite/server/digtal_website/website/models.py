from django.db import models

#creation of the contact form models


class Contact(models.Model):

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=255)
    message = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)

    # this function allows us to format the class

    def __str__(self):
        return self.last_name + ',' + self.message[:15]+'...'

    #this function allows us to directly send the email after the object is created
