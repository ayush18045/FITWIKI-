function renderNav(active) {
    const links = [
        { href: 'index.html',       label: 'Home' },
        { href: 'workouts.html',    label: 'Workouts' },
        { href: 'nutrition.html',   label: 'Nutrition' },
        { href: 'food.html',        label: 'Foods' },
        { href: 'supplements.html', label: 'Supplements' },
        { href: 'plans.html',       label: 'Plans' },
        { href: 'diet.html',        label: 'Diet' },
        { href: 'anatomy.html',     label: 'Anatomy' },
        { href: 'calculator.html',  label: 'BMI' },
        { href: 'myths.html',       label: 'Myths' },
        { href: 'glossary.html',    label: 'Glossary' },
        { href: 'beginner.html',    label: 'Beginner' },
        { href: 'injury.html',      label: 'Injury' },
        { href: 'blog.html',        label: 'Blog' },
        { href: 'about.html',       label: 'About' },
    ];
    const ul = links.map(l =>
        `<li><a href="${l.href}" class="${l.label.toLowerCase() === active ? 'active' : ''}">${l.label}</a></li>`
    ).join('');
    document.getElementById('navbar').innerHTML =
        `<a class="logo" href="index.html">FitWiki</a><ul>${ul}</ul>`;
}
