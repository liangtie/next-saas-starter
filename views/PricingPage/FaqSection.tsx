import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      
      <Accordion title="What is the Huaqiu version of KiCad?">
        The Huaqiu version is a customized distribution of KiCad tailored for Chinese users. It addresses issues specific to local needs, such as integration with supply chains, and adds features that cannot yet be merged into the main branch. The distribution remains fully compatible with all KiCad schematic and PCB file formats.
      </Accordion>
      
      <Accordion title="Why was the Huaqiu version created?">
        Huaqiu identified features crucial for Chinese users but challenging to integrate into the main branch, such as handling Microsoft Pinyin input issues or integrating cloud component libraries. The version also pre-installs plugins to enhance workflows from design to manufacturing.
      </Accordion>
      
      <Accordion title="What are the key new features in the Huaqiu version?">
        Key features include:
        - Fix for Microsoft Pinyin input freezing issues on Windows 10.
        - Plugin mirror service hosted on Gitee for stable installations in China.
        - Support for dark mode on Windows.
        - Integration with a cloud-based component library for easy part selection.
        - Pre-installed DFM plugins for efficient error checking and HQPCB plugins for real-time pricing and ordering.
      </Accordion>
      
      <Accordion title="How does the plugin mirror service work?">
        The service synchronizes all official KiCad plugin links with a Gitee repository every two days. Users can quickly download plugins without being affected by network instability. The mirror URL is pre-configured in the Huaqiu version for convenience.
      </Accordion>
      
      <Accordion title="Is the Huaqiu version open source?">
        Yes, the Huaqiu version is fully open-source under the GPL 3.0 license. The source code is available on GitLab, and pre-installed plugins are hosted on GitHub for transparency and collaboration.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
