---
layout: page
---

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers, VPTeamPageSection } from 'vitepress/theme'


// window.location.replace('../../')
const getDateTime = () => {
  const now = new Date();
  const year = String(now.getFullYear()).slice(2); 
  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const day = String(now.getDate()).padStart(2, '0'); 
  const hour = String(now.getHours()).padStart(2, '0'); 
  const minute = String(now.getMinutes()).padStart(2, '0'); 
  return `${year}${month}${day}${hour}${minute}`;
};

const members = [
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=2700197512&s=100?t=' + getDateTime(),
    name:'诸子百家，唯我纵横',
    // title:'捐款金额',
    // desc:'¥ 50'
  },
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=1982971184&s=100?t=' + getDateTime(),
    name:'卢少爷',
    // title:'捐款金额',
    // desc:'¥ 203'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=2986924248&s=100?t=' + getDateTime(),
    name: '河豚豚',
    // title: '捐款金额',
    // desc: '¥ 10'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=3039682742&s=100?t='  + getDateTime(),
    name: '名余曰正则兮',
    // title: '捐款金额',
    // desc: '¥ 30'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=3827117911&s=100?t=' + getDateTime(),
    name: '时刻想充电的刻猫猫',
    // title: '捐款金额',
    // desc: '¥ 5'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=2869822061&s=100?t=' + getDateTime(),
    name: '南山无梅落',
    // title: '捐款金额',
    // desc: '¥ 6'
  },
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=2073291584&s=100?t=' + getDateTime(),
    name:'Calvin·Harris',
    // title:'捐款金额',
    // desc:'¥ 4.45'
  }
]

const outsidesmembers = [
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=3762192560&s=100?t=' + getDateTime(),
    name:'追逐清风',
    // title:'捐款金额',
    // desc:'¥ 200'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=2718931290&s=100?t=' + getDateTime(),
    name: '神话筱樱',
    // title: '捐款金额',
    // desc: '¥ 48'
  },
  {
    avatar: 'https://q.qlogo.cn/g?b=qq&nk=3996486036&s=100?t=' + getDateTime(),
    name: '毛毛',
    // title: '捐款金额',
    // desc: '¥ 15'
  },
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=3369804814&s=100?t=' + getDateTime(),
    name:'🔵 🔵 🔵 🔵 🔵',
    // title:'捐款金额',
    // desc:'¥ 5'
  },
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=2790373163&s=100?t=' + getDateTime(),
    name:'今昔离索',
    // title:'捐款金额',
    // desc:'¥ 30'
  },
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=3125480172&s=100?t=' + getDateTime(),
    name:'魏沧海',
    // title:'捐款金额',
    // desc:'¥ 16.8'
  },
  {
    avatar:'https://q.qlogo.cn/g?b=qq&nk=2493784767&s=100?t=' + getDateTime(),
    name:'原口 正来',
    // title:'捐款金额',
    // desc:'¥ 30'
  }
]

</script>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      捐款鸣谢
    </template>
    <template #lead>
      这个页面是为了感谢那些在提研院资金困难时向提研院无私伸出援手的成员们。提瓦特文化科学研究院向他们致以崇高的敬意。
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>院内研究员捐款名单</template>
    <template #members>
      <VPTeamMembers size="small" :members="members" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>外部人员捐款名单</template>
    <template #members>
      <VPTeamMembers size="small" :members="outsidesmembers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
