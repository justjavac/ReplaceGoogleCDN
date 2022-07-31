import json
import subprocess
import os


def get_auth_data():
    auth = dict()
    print(project_dir+'/rules/advance/auth.json')
    with open(project_dir+'/rules/advance/auth.json', mode='r', encoding='utf-8') as f:
        content = f.read()
        res = json.loads(content)
        print(res)
        auth['domain'] = res[0]['condition']['requestDomains'][0]
        for item in res[0]['action']['requestHeaders']:
            auth[item['header']] = item['value']
    return auth, res


def set_auth(all_auth, latest_auth):
    with(open(project_dir+'/rules/advance/auth-latest.json', mode='w')) as f:
        # f.writelines(json.dumps(all_auth))
        print(all_auth[0]['action']['requestHeaders'])
        for item in enumerate(all_auth[0]['action']['requestHeaders']):
            if (item[1]['header'] == 'x-auth-token'):
                print(item[1])
                all_auth[0]['action']['requestHeaders'][item[0]]['value'] = latest_auth['x-auth-token']
        json.dump(all_auth, f)


def execute_one(cmd):
    res = ''
    if cmd:
        ret = subprocess.run(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, encoding="utf-8",
                             timeout=30)
        if ret.returncode == 0 and ret.stdout:
            res = ret.stdout.strip()
        else:
            print("error:", ret.stderr)
    return res

# 自己定制
def get_latest_auth(auth):
    cmd = '''
       curl -s --header "x-auth-token: {}" \
                --header "x-user-id: {}" \
                https://oauth02.domain.com/auth/json
    '''.format(auth['x-auth-token'], auth['x-user-id'])
    res = execute_one(cmd)
    print(res)
    res = json.loads(res)
    print(res)
    res = res['message']
    return {'x-auth-token': res['token'], 'x-user-id': auth['x-user-id']}


if __name__ == '__main__':
    project_dir = os.path.abspath(os.path.dirname(__file__)+'/../')
    auth, all_auth = get_auth_data()
    print(auth,all_auth)
    exit()
    latest_auth = get_latest_auth(auth)
    set_auth(all_auth, latest_auth)
