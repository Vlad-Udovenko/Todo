from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from toDoList.models import List
from toDoList.serializers import ListSerializer




@csrf_exempt
def listApi(request, id=0):
    if request.method == 'GET':
        lists = List.objects.all()
        lists_serializer = ListSerializer(lists, many=True)
        return JsonResponse(lists_serializer.data, safe=False)

    elif request.method == 'POST':
        list_data = JSONParser().parse(request)
        list_serializer = ListSerializer(data=list_data)
        if list_serializer.is_valid():
            list_serializer.save()
            return JsonResponse('Added Succesfully!!', safe=False)
        return JsonResponse('Failed to ADD', safe=False)

    elif request.method == 'PUT':
        list_data = JSONParser().parse(request)
        lists= List.objects.get(listId=list_data['listId'])
        lists_serializer = ListSerializer(lists,data = list_data)
        if lists_serializer.is_valid():
            lists_serializer.save()
            return JsonResponse('Updated Succesfully!!', safe=False)
        return JsonResponse('Failed to Update', safe=False)
        
    elif request.method == 'DELETE':
        lists = List.objects.get(listId=id)
        lists.delete()
        return JsonResponse("Deleated Successfully!", safe=False)
    
        