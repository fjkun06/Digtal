from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from website.models import Contact
from website.serializer import ContactSerializer
from rest_framework.permissions import IsAuthenticated,IsAdminUser


class ContactViewSet(ModelViewSet):

    serializer_class = ContactSerializer
    permission_classes = [IsAuthenticated, IsAdminUser]

    def get_queryset(self):

        return Contact.objects.all()
