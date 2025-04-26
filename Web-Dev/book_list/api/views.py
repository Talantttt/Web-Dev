from django.http import JsonResponse

def your_view(request):
    response = JsonResponse({'data': 'example'})
    response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    response["Access-Control-Allow-Headers"] = "Origin, Content-Type, Accept, Authorization"
    return response
