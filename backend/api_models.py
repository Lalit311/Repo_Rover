from typing import Optional

from pydantic import BaseModel


###############################################################################
# BASE MODELS FOR API
###############################################################################

class Response_Base(BaseModel):
    '''Base response model for the API that includes the `status` and `message` fields in the response'''
    status: str
    message: str

###############################################################################
# MODELS FOR ROUTE 1
###############################################################################

class Route1_Req(BaseModel):
    request_id: int

class Route1_Res(Response_Base):
    pass

###############################################################################
# MODELS FOR ROUTE 2
###############################################################################
