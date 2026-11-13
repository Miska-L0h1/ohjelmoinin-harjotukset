from flask import *
import random

app = Flask(__name__)
@app.route('/site/<path:filename>')
def serve_static(filename):
    return send_from_directory('site/', filename)

#sum
@app.route('/gamble/<bet>')
def calculate_sum(bet):
    rng = random.randint(1,4)
    if rng == 1:
        return bet * 2
    else:
        return "loss"

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)