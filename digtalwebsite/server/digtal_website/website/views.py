# from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from website.models import Contact
from website.serializer import ContactSerializer
from rest_framework.permissions import IsAuthenticated,IsAdminUser


class ContactViewSet(ModelViewSet):

    serializer_class = ContactSerializer

    def get_queryset(self):

        return Contact.objects.all()

    # def create(self, request, *args, **kwargs):

    #     serializer = ContactSerializer(request.data)
    #     if serializer.is_valid():
    #         print(request.data)

    def get_permissions(self):

        if self.action == 'create':
            permission_classes = []
        else:
            permission_classes = [IsAuthenticated, IsAdminUser]
        return [permission() for permission in permission_classes]
