from django.contrib import admin
from .models import Category, Item, Review, Comment, Tag

admin.site.register(Category)
admin.site.register(Item)
admin.site.register(Review)
admin.site.register(Comment)
admin.site.register(Tag)