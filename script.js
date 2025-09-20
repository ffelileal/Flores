// Función para generar flores SVG aleatorias
        function generateRandomFlower() {
            const flowerTypes = [
                // Girasol
                function() {
                    const petalCount = 12 + Math.floor(Math.random() * 8);
                    let petals = '';
                    for (let i = 0; i < petalCount; i++) {
                        const angle = (360 / petalCount) * i;
                        const petalLength = 25 + Math.random() * 10;
                        petals += `<ellipse cx="60" cy="${35 - petalLength/2}" rx="8" ry="${petalLength}" fill="#FFD700" transform="rotate(${angle} 60 60)" opacity="${0.8 + Math.random() * 0.2}"/>`;
                    }
                    return `<svg viewBox="0 0 120 120">
                        ${petals}
                        <circle cx="60" cy="60" r="15" fill="#8B4513"/>
                        <circle cx="60" cy="60" r="12" fill="#D2691E"/>
                    </svg>`;
                },
                // Margarita
                function() {
                    const petalCount = 8 + Math.floor(Math.random() * 8);
                    let petals = '';
                    for (let i = 0; i < petalCount; i++) {
                        const angle = (360 / petalCount) * i;
                        const petalWidth = 6 + Math.random() * 4;
                        const petalLength = 20 + Math.random() * 8;
                        petals += `<ellipse cx="60" cy="${40 - petalLength/2}" rx="${petalWidth}" ry="${petalLength}" fill="#FFFF99" transform="rotate(${angle} 60 60)" opacity="${0.9 + Math.random() * 0.1}"/>`;
                    }
                    return `<svg viewBox="0 0 120 120">
                        ${petals}
                        <circle cx="60" cy="60" r="8" fill="#FFD700"/>
                    </svg>`;
                },
                // Flor de capas
                function() {
                    const layers = 2 + Math.floor(Math.random() * 2);
                    let flower = '';
                    for (let layer = 0; layer < layers; layer++) {
                        const petalCount = 6 + Math.floor(Math.random() * 6);
                        const radius = 25 - (layer * 8);
                        for (let i = 0; i < petalCount; i++) {
                            const angle = (360 / petalCount) * i + (layer * 15);
                            const petalSize = radius + Math.random() * 5;
                            flower += `<ellipse cx="60" cy="${60 - radius}" rx="10" ry="${petalSize}" fill="#${layer === 0 ? 'FFFF66' : 'FFD700'}" transform="rotate(${angle} 60 60)" opacity="${0.8 + Math.random() * 0.2}"/>`;
                        }
                    }
                    return `<svg viewBox="0 0 120 120">
                        ${flower}
                        <circle cx="60" cy="60" r="6" fill="#FFA500"/>
                    </svg>`;
                },
                // Flor estrella
                function() {
                    const points = 5 + Math.floor(Math.random() * 3);
                    let starPetals = '';
                    for (let i = 0; i < points; i++) {
                        const angle = (360 / points) * i;
                        const innerRadius = 15;
                        const outerRadius = 30 + Math.random() * 10;
                        const x1 = 60 + Math.cos((angle - 18) * Math.PI / 180) * innerRadius;
                        const y1 = 60 + Math.sin((angle - 18) * Math.PI / 180) * innerRadius;
                        const x2 = 60 + Math.cos(angle * Math.PI / 180) * outerRadius;
                        const y2 = 60 + Math.sin(angle * Math.PI / 180) * outerRadius;
                        const x3 = 60 + Math.cos((angle + 18) * Math.PI / 180) * innerRadius;
                        const y3 = 60 + Math.sin((angle + 18) * Math.PI / 180) * innerRadius;
                        starPetals += `<path d="M 60 60 L ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} Z" fill="#FFFF00" opacity="${0.8 + Math.random() * 0.2}"/>`;
                    }
                    return `<svg viewBox="0 0 120 120">
                        ${starPetals}
                        <circle cx="60" cy="60" r="8" fill="#FF8C00"/>
                    </svg>`;
                },
                // Flor simple redonda
                function() {
                    const petalCount = 5 + Math.floor(Math.random() * 5);
                    let petals = '';
                    for (let i = 0; i < petalCount; i++) {
                        const angle = (360 / petalCount) * i;
                        const petalRadius = 12 + Math.random() * 6;
                        const distance = 25 + Math.random() * 5;
                        const x = 60 + Math.cos(angle * Math.PI / 180) * distance;
                        const y = 60 + Math.sin(angle * Math.PI / 180) * distance;
                        petals += `<circle cx="${x}" cy="${y}" r="${petalRadius}" fill="#FFFF33" opacity="${0.8 + Math.random() * 0.2}"/>`;
                    }
                    return `<svg viewBox="0 0 120 120">
                        ${petals}
                        <circle cx="60" cy="60" r="10" fill="#FFD700"/>
                    </svg>`;
                }
            ];
            
            const randomFlowerType = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
            return randomFlowerType();
        }
        
        function showSurprise() {
            const overlay = document.getElementById('overlay');
            const flowerSurprise = document.getElementById('flowerSurprise');
            const flowerElement = document.getElementById('randomFlower');
            
            // Generar una nueva flor SVG aleatoria cada vez
            flowerElement.innerHTML = generateRandomFlower();
            
            overlay.classList.add('show');
            
            setTimeout(() => {
                flowerSurprise.classList.add('show');
            }, 200);
        }

        function hideSurprise() {
            const overlay = document.getElementById('overlay');
            const flowerSurprise = document.getElementById('flowerSurprise');
            
            flowerSurprise.classList.remove('show');
            
            setTimeout(() => {
                overlay.classList.remove('show');
            }, 300);
        }

        // Cerrar con tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hideSurprise();
            }
        });