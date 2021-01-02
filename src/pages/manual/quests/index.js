import Container from '../../../components/container';
import Header from '../../../components/header';
import Link from 'next/link';
import PageName from '../../../components/page-name';
import quests from '@2003scape/rsc-manuals/quests';
import slug from 'slug';

const PAGE_TITLE = 'Quests';

function QuestList(props) {
    const { quests } = props;

    return (
        <ul className="rsc-quest-list">
            {quests.map(({ name }, i) => {
                return (
                    <li key={i}>
                        <a
                            className="rsc-link"
                            href={`/manual/quests/${slug(name)}`}
                        >
                            {name}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

export default function ManualQuests() {
    const memberQuestLength = Math.ceil(quests.members.length / 2);

    const content = (
        <div className="rsc-row">
            <div className="rsc-col rsc-col-36">
                <div
                    className="rsc-box"
                    style={{ paddingTop: '8px', height: '100%' }}
                >
                    <h2 className="rsc-stone-box">Standard Quests</h2>
                    <QuestList quests={quests.free} />
                </div>
            </div>
            <div className="rsc-col rsc-col-64">
                <div
                    className="rsc-box"
                    style={{ paddingTop: '8px', height: '100%' }}
                >
                    <h2 className="rsc-stone-box">Member-Only Quests</h2>
                    <div className="rsc-row">
                        <div className="rsc-col rsc-col-50">
                            <QuestList
                                quests={quests.members.slice(
                                    0,
                                    memberQuestLength
                                )}
                            />
                        </div>
                        <div className="rsc-col rsc-col-50">
                            <QuestList
                                quests={quests.members.slice(memberQuestLength)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <Header pageName={`${PAGE_TITLE} - RuneScape Manual`} />
            <Container>
                <PageName pageName={PAGE_TITLE}>
                    <Link href="/manual">
                        <a className="rsc-link rsc-small-block rsc-small-spaced">
                            Manual index
                        </a>
                    </Link>
                </PageName>
                <div className="rsc-row">
                    <div className="rsc-col rsc-col-100">
                        {content}
                        <br />
                    </div>
                </div>
            </Container>
        </div>
    );
}
