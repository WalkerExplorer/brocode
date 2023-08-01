import sys

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.logger import logger
from classes import ModelData
from model.classes import Code

from generate import init_model
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model_data = ModelData(model_generate="mhhmm/codegen-2B-lora", model_summarize="mhhmm/codeT5-python-sum")
model_pipeline = init_model(model_data)

@app.get("/")
async def read_root():
    return {"message": "Hello World"}

@app.post("/gen/code")
async def gen_code(code: Code):
    return process(prompt=code.data, model_pipeline=model_pipeline, continue_count=code.continue_count)
