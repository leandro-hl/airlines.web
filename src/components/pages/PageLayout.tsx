import { Container, Row } from "react-bootstrap";
import { HlButton } from "../shared/Button";
import { buildTable } from "../shared/Table";
import { FormModal } from "../shared/FormModal";
import { useIntl } from "react-intl";

const PageLayout = ({ id, headerConfig, gridConfig, modalConfig }) => {
  const intl = useIntl();

  return (
    <Container>
      <Row>
        {headerConfig?.buttons?.map(x => {
          return <HlButton onClick={x.onClick}>{x.desc}</HlButton>;
        })}
      </Row>
      <Row>{buildTable(gridConfig)}</Row>

      {modalConfig.state[0] && (
        <FormModal
          state={modalConfig.state}
          controls={modalConfig.formControls}
          title={intl.formatMessage({ id: id })}
          description={intl.formatMessage({ id: `${id}_create_update` })}
          onSubmit={modalConfig.onSubmit}
          onHide={modalConfig.onHide}
        />
      )}
    </Container>
  );
};

export { PageLayout };
