'use client'

import { useState } from 'react';
import PinkButton from '../reusable/PinkButton';

interface QuoteCardProps {
    text: string;
    date: string;
}

export default function QuoteCard({ text, date }: QuoteCardProps) {
    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('Quote copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const downloadAsImage = (text: string, date: string) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Calculate text dimensions and required canvas height
        ctx.font = '20px Arial';
        const maxWidth = 750;
        const lineHeight = 30;
        const padding = 40;

        // Split text into paragraphs
        const paragraphs = text.split('\n\n');
        let lines: string[] = [];
        let totalHeight = padding * 2; // Top and bottom padding

        // Calculate lines and total height needed
        paragraphs.forEach(paragraph => {
            // Handle each paragraph
            let currentLine = '';
            const words = paragraph.split('');

            words.forEach(char => {
                const testLine = currentLine + char;
                const metrics = ctx.measureText(testLine);

                if (metrics.width > maxWidth) {
                    lines.push(currentLine);
                    currentLine = char;
                    totalHeight += lineHeight;
                } else {
                    currentLine = testLine;
                }
            });

            if (currentLine) {
                lines.push(currentLine);
                totalHeight += lineHeight;
            }

            // Add extra line between paragraphs
            lines.push('');
            totalHeight += lineHeight;
        });

        // Set canvas dimensions based on content
        canvas.width = 800;
        canvas.height = totalHeight + 50; // Extra space for date

        // Draw solid background
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Add some visual style - changed to black and white theme
        ctx.fillStyle = '#FFFFFF'; // White background
        ctx.fillRect(20, 20, canvas.width - 40, canvas.height - 40);

        // Draw text in black
        ctx.fillStyle = '#000000';
        ctx.font = '20px Arial';
        let y = padding;
        lines.forEach(line => {
            ctx.fillText(line, padding, y);
            y += lineHeight;
        });

        // Add date at bottom in black
        ctx.font = '16px Arial';
        ctx.fillText(new Date(date).toLocaleDateString(), padding, canvas.height - padding);

        try {
            // Create download link
            const link = document.createElement('a');
            link.download = 'quote.png';
            link.href = canvas.toDataURL();
            link.click();
        } catch (err) {
            console.error('Failed to download image:', err);
            alert('Failed to download image. Please try again.');
        }
    };

    return (
        <div className="relative bg-white dark:bg-black rounded-lg p-6 hover:text-pink dark:hover:text-pink hover:shadow-[4px_4px_0px_rgba(236,72,153,1)] dark:hover:shadow-[4px_4px_0px_rgba(236,72,153,1)] transition duration-300 border border-gray-200 dark:border-gray-800">
            <div className="absolute -bottom-1 -right-1 w-full h-full bg-black/60 dark:bg-white/50 rounded-lg -z-10 hover:bg-pink/50 dark:hover:bg-pink/50"></div>
            <div className="flex justify-between items-start mb-2">
                <div>
                    
                    <span className="text-xs bg-pink/10 dark:bg-pink/20 rounded-full px-2 py-1 mt-1 inline-block">
                        {new Date(date).toLocaleDateString()}
                    </span>
                </div>
                <div className="flex">
                    <PinkButton text="copy" onClick={() => copyToClipboard(text)} size="small" />
                    <PinkButton text="Download" onClick={() => downloadAsImage(text, date)} size="small" />
                </div>
                
            </div>
            <p className="text-gray-800 dark:text-gray-200">{text}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm right-0">{new Date(date).toLocaleString()}</p>
        </div>
    );
}
