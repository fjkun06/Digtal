from django.db import models
from django.db import models
import smtplib
from email.message import EmailMessage

# creation of the contact form models

EMAIL_HOLDER = 'dgitald5@gmail.com'
PASSWORD_HOLDER = 'gjrjkwphzhgzouzp'
PASSWORD_SENDER = 'nihabgkvdasfbgom'
EMAIL_SENDER = 'noreplydigitald@gmail.com'


class Contact(models.Model):

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=255)
    subject = models.CharField(
        max_length=255, blank=True, default='Reporting Bugs')
    message = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)

    def send_mail(self, *args, **kwargs):

        with smtplib.SMTP_SSL('smtp.gmail.com') as smtp:

            smtp.login(EMAIL_SENDER, PASSWORD_SENDER)
            variable_message = f' \n send by {self.first_name} {self.last_name}  for {self.subject} with the email {self.email} '
            email = EmailMessage()
            email['to'] = EMAIL_HOLDER
            email['from'] = EMAIL_SENDER
            email['subject'] = self.subject
            self.message += variable_message
            email.set_content(self.message)
            smtp.send_message(email)

    # this function allows us to format the class

    def __str__(self):
        return self.last_name

    def save(self):
        self.send_mail()
        super(Contact, self).save()
