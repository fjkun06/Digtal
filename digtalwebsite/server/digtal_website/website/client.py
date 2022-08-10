import requests
from faker import Faker


endpoint = 'http://localhost:8000/api/content/contact/'

headers = {'Accept': 'application/json', 'Auth': 'Bearer '}
credidentials = {'username': 'digtal-admin', "password": '#inhackable@try123'}


headers = {'Accept': 'application/json', }


for i in range(2):
    generator = Faker()
    first_name = generator.first_name()
    last_name = generator.last_name()
    email = generator.email()
    phone = generator.phone_number()
    text = generator.text()

    data = {'first_name': first_name, 'last_name': last_name,
            'email': 'kirikounat2@gmail.com', 'subject': 'testing the website', 'phone_number': phone, 'message': text}

    request = requests.post(endpoint, data=data, headers=headers)

    print(request.text)
