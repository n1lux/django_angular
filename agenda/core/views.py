from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from .models import Person

template_default = 'index.html'
template_contact = 'contact.html'

def index(request):
    return render(request, template_default)



def contact(request):
    return render(request, template_contact)

def contact_ajax(request):
    if request.is_ajax():
        p = request.POST.get('person')
        create_person(p)

        return HttpResponse(request, "sucess", status=200, content_type='application/json')


def create_person(person):
    try:
        kwargs = {'name': person.name,
                  'age': person.age,
                  'phone': person.phone,
                  'email': person.email
                  }
        p = Person.create(kwargs)
        p.save()
    except Exception as ex:
        print(ex)
