from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from website.views import ContactViewSet
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
router = SimpleRouter()

router.register('contact', ContactViewSet, basename='api-contact')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/content/', include(router.urls)),
    path('api/token/obtain',TokenObtainPairView.as_view(),name='api-token-obtain'),
    path('api/token/refresh',TokenRefreshView.as_view(),name='api-token-refresh')
]
