from pyramid.view import view_config
from pyramid.interfaces import IAuthenticationPolicy
from .security import USERS


@view_config(route_name='login', renderer='json', request_method='POST')
def login (request):
    user = request.json_body.get('username')
    password = request.json_body.get('password')

    if user and password and USERS.get(user) == password:
        policy = request.registry.queryUtility(IAuthenticationPolicy)
        token = policy.encode_jwt(request, claims={'sub': user})

        return {
            'token': 'JWT token="' + token.decode('utf-8') + '"'
        }
    else:
        return {
            'error': 'login failed'
        }


# An example of a protected URL
@view_config(route_name='protected', renderer='json', permission='edit')
def protected (request):
    return {'user': request.authenticated_userid}


# Something we need to implement in our API, to return user info
@view_config(route_name='profile', renderer='json', permission='edit')
def profile (request):
    return {
        'username': request.authenticated_userid,
        'firstName': 'Jill',
        'lastName': 'Jones'
    }
