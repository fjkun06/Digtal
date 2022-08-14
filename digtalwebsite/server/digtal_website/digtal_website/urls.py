from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from website.views import ContactViewSet, NewsletterViewset
router = SimpleRouter()

router.register('contact', ContactViewSet, basename='api-contact')
router.register('newsletter', NewsletterViewset, basename='api-newsletter')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/content/', include(router.urls)),
]
