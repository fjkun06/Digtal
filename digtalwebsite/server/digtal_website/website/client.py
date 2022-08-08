import requests
import json
from faker import Faker


endpoint = 'http://localhost:8000/api/content/contact/'
refresh = 'http://localhost:8000/api/token/refresh'
access = 'http://localhost:8000/api/token/obtain'
headers = {'Accept': 'application/json', 'Auth': 'Bearer '}
credidentials = {'username': 'digtal-admin', "password": '#inhackable@try123'}

tokens = requests.post(access, credidentials, headers=headers).json()
token_refresh = tokens.get('refresh')
token_access = tokens.get('access')

headers = {'Accept': 'application/json',
           'Authorization': 'Bearer {}'.format(token_access)}


# request = requests.get(endpoint, headers=headers)


# print(request.json())

# lets get a token

for i in range(15):
    generator = Faker()
    first_name = generator.first_name()
    last_name = generator.last_name()
    email = generator.email()
    phone = generator.phone_number()
    text = generator.text()

    data = {'first_name': first_name, 'last_name': last_name,
            'email': email, 'phone_number': phone, 'message': text}

    request = requests.post(endpoint, data=data, headers=headers)

    print(request.text)
