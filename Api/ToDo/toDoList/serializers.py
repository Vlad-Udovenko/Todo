from rest_framework  import serializers
from toDoList.models import List

class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields =('listId',
                 'listTask',
                 'listStatus')  