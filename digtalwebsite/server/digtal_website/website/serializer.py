from rest_framework.serializers import ModelSerializer
from website.models import Contact, Newsletter

class ContactSerializer(ModelSerializer):

    class Meta:
        
        model = Contact
        fields ='__all__'


class NewsletterSerializer(ModelSerializer):

    class Meta:

        model = Newsletter
        fields = '__all__'
