import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import archiver from "archiver";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume view endpoint - serves PDF for inline viewing
  app.get("/api/resume/view", (req, res) => {
    const resumePath = path.resolve(import.meta.dirname, "public", "resume.pdf");
    
    console.log('Resume path:', resumePath);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="G_Srishtik_Sekar_Resume.pdf"');
    res.setHeader('Cache-Control', 'no-cache');
    
    res.sendFile(resumePath, (err) => {
      if (err) {
        console.error('Error sending resume file:', err);
        res.status(404).json({ message: 'Resume file not found' });
      }
    });
  });

  // Project zip download endpoint
  app.get("/api/project/download", (req, res) => {
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    });

    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename="G_Srishtik_Portfolio_Project.zip"');

    archive.on('error', (err: Error) => {
      console.error('Archive error:', err);
      res.status(500).json({ message: 'Error creating zip file' });
    });

    archive.pipe(res);

    // Get the project root directory
    const projectRoot = path.resolve(import.meta.dirname, '..');
    
    // Add project files to the archive, excluding node_modules and other unnecessary files
    archive.glob('**/*', {
      cwd: projectRoot,
      ignore: [
        'node_modules/**',
        'dist/**',
        '.git/**',
        '.replit',
        'package-lock.json',
        '*.log',
        '.env*',
        'attached_assets/**'
      ]
    });

    archive.finalize();
  });

  const httpServer = createServer(app);

  return httpServer;
}
