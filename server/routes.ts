import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    const resumePath = path.join(import.meta.dirname, "public", "resume.pdf");
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="G_Srishtik_Sekar_Resume.pdf"');
    
    res.sendFile(resumePath, (err) => {
      if (err) {
        console.error('Error sending resume file:', err);
        res.status(404).json({ message: 'Resume file not found' });
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
