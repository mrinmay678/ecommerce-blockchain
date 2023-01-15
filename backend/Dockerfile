FROM python:3.9

WORKDIR /app
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . .

RUN pip install uvicorn gunicorn

CMD ["gunicorn", "myproject.asgi:application", "-k", "uvicorn.workers.UvicornWorker", "-p 8000", "-h 0.0.0.0", "--reload"]