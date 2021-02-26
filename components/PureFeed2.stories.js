import PureFeed2 from '~/components/PureFeed2';
import ITEM_DATA_MAP from '~/test/testdata/mwapi/small/datamap.json';

export default {
  title: 'PureFeed2',
  component: PureFeed2,
  argTypes: {
    itemKey: {
      control: {
        type: 'select',
        options: Object.keys(ITEM_DATA_MAP)
      },
      name: 'Revision picker',
      description: 'This control selects different revisions to show'
    },
    onRevert: { action: 'revert' },
    onJudgement: { action: 'judgement' },
    onNext: { action: 'next' },
  },
  parameters: {
    // Set the viewports in Chromatic at a component level.
    chromatic: { viewports: [320, 375, 428, 768, 1024, 1280, 1800] },
  },
};

const Template = (args, { argTypes }) => ({
  components: { PureFeed2 },
  props: Object.keys(argTypes),
  template: `<PureFeed2 
    :infoLoaded="infoLoaded"
    :diffLoaded="diffLoaded"
    :item="item || itemDataMap[itemKey]" 
    
    :judgement="judgement"
    :judgementPending="judgementPending"
    :interactions="interactions"
    :showJudgementPanel="showJudgementPanel"
    v-bind="$props"
    @judgement="onJudgement"
    @revert="onRevert"
    @next="onNext" 
    />`,
  data() {
    return {
      itemDataMap: ITEM_DATA_MAP,
    };
  }
});

export const basic = Template.bind({});
basic.args = {
  infoLoaded: true,
  diffLoaded: true,
  item: {
    wiki: 'enwiki',
    revId: 989699374,
    title: 'Human tooth sharpening',
    timestamp: '2019-07-01T21:49:32Z',
    author: '2601:5C2:1:5720:A5F4:BA9B:79B8:598C',
    summary: 'b hdhe ekjwjk eiqnq /* History */',
    diffHtml:
      '<tr>\n  <td colspan="2" class="diff-lineno">Line 52:</td>\n  <td colspan="2" class="diff-lineno">Line 52:</td>\n</tr>\n<tr>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Forts in Japan]]</div></td>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Forts in Japan]]</div></td>\n</tr>\n<tr>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Osaka Castle]]</div></td>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Osaka Castle]]</div></td>\n</tr>\n<tr>\n  <td class="diff-marker">−</td>\n  <td class="diff-deletedline"><div>[[Category:<del class="diffchange diffchange-inline">15th-century</del> establishments in Japan]]</div></td>\n  <td class="diff-marker">+</td>\n  <td class="diff-addedline"><div>[[Category:<ins class="diffchange diffchange-inline">1490s</ins> establishments in Japan]]</div></td>\n</tr>\n<tr>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:15th-century fortifications]]</div></td>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:15th-century fortifications]]</div></td>\n</tr>\n<tr>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Rennyo]]</div></td>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Rennyo]]</div></td>\n</tr>\n\n<!-- diff cache key enwiki:diff:wikidiff2:1.12:old-913912176:rev-920429244:1.10.0 -->\n',
  },
};

export const judgementPending = Template.bind({});
judgementPending.args = {
  infoLoaded: true,
  diffLoaded: true,
  item: {
    wiki: 'enwiki',
    revId: 989699374,
    title: 'Human tooth sharpening',
    timestamp: '2019-07-01T21:49:32Z',
    author: '2601:5C2:1:5720:A5F4:BA9B:79B8:598C',
    summary: 'b hdhe ekjwjk eiqnq /* History */',
    diffHtml:
      '<tr>\n  <td colspan="2" class="diff-lineno">Line 52:</td>\n  <td colspan="2" class="diff-lineno">Line 52:</td>\n</tr>\n<tr>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Forts in Japan]]</div></td>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Forts in Japan]]</div></td>\n</tr>\n<tr>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Osaka Castle]]</div></td>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Osaka Castle]]</div></td>\n</tr>\n<tr>\n  <td class="diff-marker">−</td>\n  <td class="diff-deletedline"><div>[[Category:<del class="diffchange diffchange-inline">15th-century</del> establishments in Japan]]</div></td>\n  <td class="diff-marker">+</td>\n  <td class="diff-addedline"><div>[[Category:<ins class="diffchange diffchange-inline">1490s</ins> establishments in Japan]]</div></td>\n</tr>\n<tr>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:15th-century fortifications]]</div></td>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:15th-century fortifications]]</div></td>\n</tr>\n<tr>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Rennyo]]</div></td>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Rennyo]]</div></td>\n</tr>\n\n<!-- diff cache key enwiki:diff:wikidiff2:1.12:old-913912176:rev-920429244:1.10.0 -->\n',
  },
  judgement: 'LooksGood',
  judgementPending: true,
};

export const judgementDone = Template.bind({});
judgementDone.args = {
  infoLoaded: true,
  diffLoaded: true,
  item: {
    wiki: 'enwiki',
    revId: 989699374,
    title: 'Human tooth sharpening',
    timestamp: '2019-07-01T21:49:32Z',
    author: '2601:5C2:1:5720:A5F4:BA9B:79B8:598C',
    summary: 'b hdhe ekjwjk eiqnq /* History */',
    diffHtml:
      '<tr>\n  <td colspan="2" class="diff-lineno">Line 52:</td>\n  <td colspan="2" class="diff-lineno">Line 52:</td>\n</tr>\n<tr>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Forts in Japan]]</div></td>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Forts in Japan]]</div></td>\n</tr>\n<tr>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Osaka Castle]]</div></td>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Osaka Castle]]</div></td>\n</tr>\n<tr>\n  <td class="diff-marker">−</td>\n  <td class="diff-deletedline"><div>[[Category:<del class="diffchange diffchange-inline">15th-century</del> establishments in Japan]]</div></td>\n  <td class="diff-marker">+</td>\n  <td class="diff-addedline"><div>[[Category:<ins class="diffchange diffchange-inline">1490s</ins> establishments in Japan]]</div></td>\n</tr>\n<tr>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:15th-century fortifications]]</div></td>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:15th-century fortifications]]</div></td>\n</tr>\n<tr>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Rennyo]]</div></td>\n  <td class="diff-marker">&#160;</td>\n  <td class="diff-context"><div>[[Category:Rennyo]]</div></td>\n</tr>\n\n<!-- diff cache key enwiki:diff:wikidiff2:1.12:old-913912176:rev-920429244:1.10.0 -->\n',
  },
  judgement: 'LooksGood',
  judgementPending: false,
  showJudgementPanel: true,
  interactions: [
    { wikiUserName: 'Xinbenlv', userGaId: 'GA1.2.1021694750.1607134727', judgement: 'LooksGood' },
    { wikiUserName: 'XinbenlvSandBox', userGaId: 'GA1.2.1021694750.1607134727', judgement: 'LooksGood' },
    { wikiUserName: 'Alpha', userGaId: 'GA1.2.1021694750.1607134827', judgement: 'NotSure' },
    { wikiUserName: 'Bella', userGaId: 'GA1.2.1021694750.160718372', judgement: 'ShouldRevert' },
    { userGaId: 'GA1.2.1021694750.160718144', judgement: 'ShouldRevert' },
    { userGaId: 'GA1.2.1021694750.160718274', judgement: 'ShouldRevert' },
  ],
};

export const selectableData = Template.bind({});
selectableData.args = {
  infoLoaded: true,
  diffLoaded: true,
  itemKey: Object.keys(ITEM_DATA_MAP)[0],
  judgement: 'LooksGood',
  judgementPending: false,
  showJudgementPanel: true,
  interactions: [
    { wikiUserName: 'Xinbenlv', userGaId: 'GA1.2.1021694750.1607134727', judgement: 'LooksGood' },
    { wikiUserName: 'XinbenlvSandBox', userGaId: 'GA1.2.1021694750.1607134727', judgement: 'LooksGood' },
    { wikiUserName: 'Alpha', userGaId: 'GA1.2.1021694750.1607134827', judgement: 'NotSure' },
    { wikiUserName: 'Bella', userGaId: 'GA1.2.1021694750.160718372', judgement: 'ShouldRevert' },
    { userGaId: 'GA1.2.1021694750.160718144', judgement: 'ShouldRevert' },
    { userGaId: 'GA1.2.1021694750.160718274', judgement: 'ShouldRevert' },
  ],
};

export const selectableDataShouldRevert = Template.bind({});
selectableDataShouldRevert.args = {
  infoLoaded: true,
  diffLoaded: true,
  itemKey: Object.keys(ITEM_DATA_MAP)[0],
  judgement: 'ShouldRevert',
  judgementPending: false,
  showJudgementPanel: true,
  eligibleForRevert: true,
  gCanDirectEdit: true,
  followUpStatus: 'PENDING',
  interactions: [
    { wikiUserName: 'Xinbenlv', userGaId: 'GA1.2.1021694750.1607134727', judgement: 'LooksGood' },
    { wikiUserName: 'XinbenlvSandBox', userGaId: 'GA1.2.1021694750.1607134727', judgement: 'LooksGood' },
    { wikiUserName: 'Alpha', userGaId: 'GA1.2.1021694750.1607134827', judgement: 'NotSure' },
    { wikiUserName: 'Bella', userGaId: 'GA1.2.1021694750.160718372', judgement: 'ShouldRevert' },
    { userGaId: 'GA1.2.1021694750.160718144', judgement: 'ShouldRevert' },
    { userGaId: 'GA1.2.1021694750.160718274', judgement: 'ShouldRevert' },
  ],
};

