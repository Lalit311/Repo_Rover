from fastapi import APIRouter
import api_models


router = APIRouter(tags = ['copy'])


@router.get('/')
async def ping():

    response = {
        "status": "success",
        "message": "Hello there !!",
    }

    return response
