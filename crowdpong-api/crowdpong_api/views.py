from pyramid.view import view_config


@view_config(route_name='home', renderer='templates/mytemplate.jinja2')
def my_view(request):
    return {'project': 'crowdpong-api'}


@view_config(route_name='controller', renderer='json')
def controller_api(request):

    count = request.session.setdefault("count", 0)
    request.session["count"] = count+1

    if request.method == "GET":
        return {'team': "blue", 'paddle': 0.0, 'count': count}

    if request.method == "POST":
        command = request.json.get("command")
        return {'team': "blue", 'paddle': 0.0, 'command': command}


@view_config(route_name='game_state', renderer='json')
def game_state_api(request):
    return {'blue_paddle': 0.0, 'red_paddle': 0.0}


@view_config(route_name='game_config', renderer='json')
def game_config_api(request):
    return {'blue_paddle': 0.0, 'red_paddle': 0.0}

