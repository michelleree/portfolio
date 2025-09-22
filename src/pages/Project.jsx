// src/pages/Project.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Project.css'; // Optional: Erstelle eine neue CSS-Datei

// Beispieldaten: In einem echten Projekt würdest du diese wahrscheinlich von einer API laden
const projectData = {
    'projekt-a': {
        title: 'Projekt A',
        description: 'Dies ist die Detailseite für Projekt A. Hier könnten Bilder, Videos und eine ausführliche Beschreibung stehen.',
    },
    'projekt-b': {
        title: 'Projekt B',
        description: 'Dies ist die Detailseite für Projekt B. Die Inhalte hier sind dynamisch basierend auf der URL.',
    },
};

export default function Project() {
    // Hole den Parameter aus der URL
    const { projectId } = useParams();

    // Finde das entsprechende Projekt in den Daten
    const project = projectData[projectId];

    // Wenn das Projekt nicht gefunden wird
    if (!project) {
        return <h2>Projekt nicht gefunden!</h2>;
    }

    // Zeige die Projekt-Details
    return (
        <main>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </main>
    );
}