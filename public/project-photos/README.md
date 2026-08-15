# Project Photos Directory

This directory contains individual folders for each project where you can add images and videos.

## Structure

Each project has its own folder named after the project slug:

```
project-photos/
├── neural-ninja/
├── warehouse-xr-odoo/
├── human-body-simulation/
├── airport-security-vr/
└── ... (one folder per project)
```

## How to Add Media

1. Navigate to the specific project folder (e.g., `project-photos/neural-ninja/`)
2. Add your images and videos to that folder
3. Supported formats:
   - Images: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`
   - Videos: `.mp4`, `.webm`, `.mov`

## Access in Code

Media files can be accessed via:
```
/project-photos/{project-slug}/{filename}
```

Example:
```
/project-photos/neural-ninja/screenshot-1.jpg
/project-photos/warehouse-xr-odoo/demo-video.mp4
```

## Automatic Display

The project detail pages will automatically display media from these folders when you add files to them.