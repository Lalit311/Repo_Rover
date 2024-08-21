from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from . import routers

app = FastAPI()

origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins     = origins,
    allow_credentials = True,
    allow_methods     = ['*'],
    allow_headers     = ['*']
)

#app.include_router(routers.route, prefix = "/v1/howathon/repo-rangers/route-1")

@app.get('/')
def health():
    return {
        "message": "Ok, working !!"
    }


