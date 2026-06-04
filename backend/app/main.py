from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

app = FastAPI(title="Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str

@app.get("/api/projects")
def get_projects():
    return [
        {
            "id": 1,
            "title": "3D Portfolio",
            "description": "Portfolio w React, Three.js i FastAPI.",
            "tech": ["React", "TypeScript", "FastAPI", "REST API"],
            "github": "https://github.com/twoj-login/portfolio-3d"
        }
    ]

@app.post("/api/contact")
def contact(data: ContactMessage):
    return {"status": "ok", "message": "Wiadomość została odebrana"}