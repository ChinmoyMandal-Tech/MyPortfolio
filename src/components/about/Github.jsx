import GitHubCalendar from 'react-github-calendar';

function Github() {
    const username = 'ChinmoyMandal-Tech';

    const gitc1 = 'var(--git-c1)';
    const gitc2 = 'var(--git-c2)';
    const gitc3 = 'var(--git-c3)';
    const gitc4 = 'var(--git-c4)';
    const gitc5 = 'var(--git-c5)';

    const theme = {
    dark: [gitc1, gitc2, gitc3, gitc4, gitc5],
    };

    return (
        <div className="max-w-6xl my-10 text-center overflow-hidden">
            <h2 className="text-4xl font-semibold mb-6 text-[var(--text)]">
                Days I <span className="font-bold text-[var(--text_highlight)]">Code</span>
            </h2>

            <div className="w-full flex justify-center items-center overflow-hidden">
                <GitHubCalendar
                    username={username}
                    blockSize={12}
                    blockMargin={3}
                    theme={theme}
                    fontSize={20}
                />
            </div>
        </div>
    );
}

export default Github;
