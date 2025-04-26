from django.urls import path
from . import views_CBV

urlpatterns = [
    path('books/', views_CBV.ItemListView.as_view(), name='item-list'),
    path('books/<int:pk>/', views_CBV.ItemDetailView.as_view(), name='book-detail'),
    path('reviews/', views_CBV.ReviewCreateView.as_view(), name='review-create'),
]
