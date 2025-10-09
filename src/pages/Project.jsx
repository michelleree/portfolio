import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Project.css'; // Stil-Datei für diese Komponente
import { findProjectBySlug } from '../data/projectData.js'; // Hilfsfunktion importiert

export default function Project() {
    // Holt den 'slug' des Projekts aus der URL
    const { projectId } = useParams();

    // Sucht das Projekt
    const project = findProjectBySlug(projectId);

    if (!project) {
        return (
            <main className="p-4 sm:p-8">
                <h2>Projekt "{projectId}" nicht gefunden!</h2>
                <p>Bitte überprüfen Sie den Link oder kehren Sie zur <Link to="/work">Übersichtsseite</Link> zurück.</p>
            </main>
        );
    }

    // Die Projekt-Detailansicht
    return (
        <main className="p-4 sm:p-8 space-y-4">
            <div className="relative aspect-video w-full">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            {project.technologies && (
                <div>
                    <h5 className="font-semibold">Technologies:</h5>
                    <ul className="list-disc list-inside">
                        {project.technologies.map((tech, i) => (
                            <li key={i}>{tech}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Links anzeigen */}
            {project.overviewLink && (
                <p>
                    <a href={project.overviewLink} target="_blank" rel="noopener noreferrer"
                       className="underline">
                        Project Overview
                    </a>
                </p>
            )}

            {(project.exploreLink || project.link) && (
                <p>
                    <a href={project.exploreLink || project.link} target="_blank" rel="noopener noreferrer"
                       className="underline">
                        Explore Project
                    </a>
                </p>
            )}

            {project.repositoryURL && (
                <p>
                    <a href={project.repositoryURL} target="_blank" rel="noopener noreferrer"
                       className="underline">
                        GitHub Repo
                    </a>
                </p>
            )}

            <h5 className="font-semibold">Overview:</h5>
            {/* Bildergalerie */}
            <div className={`grid gap-4 ${project.descriptionImageGridClass || 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                {project.descriptionImages?.map((imgSrc, index) => (
                    <img
                        key={index}
                        src={imgSrc}
                        alt={`${project.title} Screenshot ${index + 1}`}
                        className="w-full h-auto"
                    />
                ))}
            </div>

            {/* Disclaimer am Ende, falls gewünscht */}
            <section>
                <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10"/>
                <p className="mb-3">Image Cover Sources:</p>
                {/* Füge hier die statischen Quellangaben ein */}
            </section>
        </main>
    );
}