import type { FC } from 'react';
import { ArrowButton, Container, PageButton } from './styles';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface IProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const Pagination: FC<IProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  const pages = new Array(totalPages).fill(null);

  return (
    <Container>
      <ArrowButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <LeftOutlined />
      </ArrowButton>

      {pages.map((_, i) => (
        <PageButton
          key={i + 1}
          onClick={() => handlePageChange(i + 1)}
          $isCurrentPage={currentPage === i + 1}
        >
          {i + 1}
        </PageButton>
      ))}

      <ArrowButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <RightOutlined />
      </ArrowButton>
    </Container>
  );
};

export default Pagination;
